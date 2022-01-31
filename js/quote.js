const quotes = [
    {
        quote: "지금 공부 안하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다"
    },
    {
        quote: "늦었다고 생각할 때가 진짜 늦었다"
    },
    {
        quote: "어려운 길은 길이 아니다"
    },
    {
        quote: "뭘 무서워 그냥 하는 거지, 난관이 이것만 있겠어?"
    },
    {
        quote: "노력하지 않는 자는 기회조차 안 온다"
    },
    {
        quote: "돈으로 행복을 살 수는 없지만 자전거에 앉아 우는 것보다 벤츠에 앉아 우는 게 더 행복하다"
    },
    {
        quote: "행복을 돈으로 살 수 없다면 혹시 돈이 모자란 건 아닌지 확인해보자"
    },
    {
        quote: "인생은 생방송, 재방송은 없다"
    },
    {
        quote: "과거는 갔고 미래는 모른다"
    },
    {
        quote: "지금 놀면 평생 논다"
    },
];

const quote = document.querySelector(".quote span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}."`;