Feature('My suite');

Scenario('first test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example Domain','h1')
});

Scenario('second test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example Domain','h1')
});

Scenario('third test',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example Domain','h1')
});
