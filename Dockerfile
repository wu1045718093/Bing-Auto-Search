ARG version=16.16.0-alpine

FROM node:${version}

ENV BingAutoSearch_MicroSoft_COOKIE='' \
    BingAutoSearch_sleep_sec='' \
    BingAutoSearch_proxy="" \
    BingAutoSearch_edgeUserAgent="" \
    BingAutoSearch_mobileUserAgent="" \
    BingAutoSearch_wordlists=""

WORKDIR /Bing-Auto-Search

RUN npm install -y --save axios@1.1.3 https-proxy-agent

CMD wget -O Bing-Auto-Search.js https://raw.githubusercontent.com/wu1045718093/Bing-Auto-Search/main/Bing-Auto-Search.js\
    && wget -O sendNotify.js https://raw.githubusercontent.com/wu1045718093/Bing-Auto-Search/main/sendNotify.js \
    && clear \
    && BingAutoSearch_MicroSoft_COOKIE=$BingAutoSearch_MicroSoft_COOKIE \
    BingAutoSearch_sleep_sec=$BingAutoSearch_sleep_sec \
    BingAutoSearch_proxy=$BingAutoSearch_proxy \
    BingAutoSearch_edgeUserAgent=$BingAutoSearch_edgeUserAgent \
    BingAutoSearch_mobileUserAgent=$BingAutoSearch_mobileUserAgent \
    BingAutoSearch_wordlists=$BingAutoSearch_wordlists \
    node Bing-Auto-Search.js
