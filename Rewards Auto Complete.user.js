// ==UserScript==
// @name         Rewards Auto Complete
// @namespace    https://github.com/emtry/Bing-Auto-Search
// @updateURL    https://raw.githubusercontent.com/emtry/Bing-Auto-Search/main/Rewards%20Auto%20Complete.user.js
// @downloadURL  https://raw.githubusercontent.com/emtry/Bing-Auto-Search/main/Rewards%20Auto%20Complete.user.js
// @version      1.0.2
// @description  Microsoft Rewards Auto Complete
// @author       ehgenong
// @match        https://rewards.bing.com/*
// @match        https://www.bing.com/search?q=*
// @icon         https://www.google.com/s2/favicons?domain=bing.com
// ==/UserScript==

(function() {
    'use strict';


//     if(isHere('#daily-sets > h1')){
//         document.querySelector('#daily-sets > h1').addEventListener("click",function(ev){
//             Daily_set();
//         });
//     }

//     if(isHere('#rewardsAngular > div > mee-rewards-more-activities-card > h1')){
//         document.querySelector('#rewardsAngular > div > mee-rewards-more-activities-card > h1').addEventListener("click",function(ev){
//             More_activities();
//         });
//     }

    if(isHere('#btoption1')){ //Daily poll
        (async ()=>{
            await sleep(2);
            Click('#btoption1');
        })()
    }

    if(isHere('#rqStartQuiz') || isHere('#rqAnswerOption1')){ //This Or That
        if(!isHere('#rqAnswerOption2')) {
            (async ()=>{
                await sleep(2);
                This_Or_That();
            })()
        }
    }

    if(isHere('#currentQuestionContainer')){ //quiz
        (async ()=>{
            await sleep(2);
            quiz();
        })()
    }

    if(isHere('#ListOfQuestionAndAnswerPanes')){ //QuestionPane
        QuestionPane();
    }


    //日常任务
    async function Daily_set() {
        for (let index = 1; index <= 3; index ++) {
            let selector = '#daily-sets > mee-card-group > div > mee-card:nth-child(' + index + ') > div > card-content > mee-rewards-daily-set-item-content > div > a';
            if(isHere(selector)){
                Click(selector);
                await sleep(2);
            }
        }
    }

    //更多活动
    async function More_activities() {
        for (let index = 1; index <= 20; index ++) {
            let selector = '#more-activities > div > mee-card:nth-child(' + index + ') > div > card-content > mee-rewards-more-activities-card-item > div > a';
            if(isHere(selector)){
                Click(selector);
                await sleep(2);
            }
        }
    }

    //This Or That
    async function This_Or_That() {
        Click('#rqStartQuiz');
        Click('#rqAnswerOption1');
    }

    //quiz
    async function quiz() {
        Click('#rqStartQuiz');
        for (let index = 0; index <= 10; index ++) {
            let selector = '#rqAnswerOption' + index;
            Click(selector);
        }
        await sleep(1);
        quiz();
    }

    //QuestionPane
    async function QuestionPane() {
        for (let index = 0; index <= 12; index ++) {
            let selector = '#QuestionPane' + index + ' > div.b_vPanel.b_loose > div:nth-child(2) > a:nth-child(3)';
            if(isHere(selector)){
                Click(selector);
            }
        }
    }

    // 判断元素
    function isHere(selector) {
        let target = document.querySelector(selector);
            if (!!target) {
                // console.log(selector);
                return selector;
            }
    }

    // 点击元素
    function Click(selector, desc = 'Click') {
        return new Promise(resolve => {
            let target = document.querySelector(selector);
                if (!!target) {
                    target.dispatchEvent(new Event('click'));
                    target.click();
                    console.log(desc, selector);
                    resolve(selector);
                }
            })
    }

    // 睡眠
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, 1000 * ms));
    }

})();
