(async () => {
    const data = await $.get('./data.json')
    $('#content').text(JSON.stringify(data))
})()
