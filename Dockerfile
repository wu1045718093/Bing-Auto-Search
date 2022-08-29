ARG version=16.16.0-alpine

FROM node:${version}

ENV BingAutoSearch_MicroSoft_COOKIE='' \
    BingAutoSearch_sleep_sec='' \
    BingAutoSearch_edgeUserAgent="" \
    BingAutoSearch_mobileUserAgent="" \
    BingAutoSearch_wordlists=""

WORKDIR /Bing-Auto-Search

RUN npm install -y --save axios

CMD wget -O Bing-Auto-Search.js https://raw.githubusercontent.com/wu1045718093/Bing-Auto-Search/hk-region/Bing-Auto-Search.js \
    && clear \
    && BingAutoSearch_MicroSoft_COOKIE=$BingAutoSearch_MicroSoft_COOKIE \
    BingAutoSearch_sleep_sec=$BingAutoSearch_sleep_sec \
    BingAutoSearch_edgeUserAgent=$BingAutoSearch_edgeUserAgent \
    BingAutoSearch_mobileUserAgent=$BingAutoSearch_mobileUserAgent \
    BingAutoSearch_wordlists=$BingAutoSearch_wordlists \
    node Bing-Auto-Search.js
