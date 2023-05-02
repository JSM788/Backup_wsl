export const download = function (data, indicator) {

    const blob = new Blob([data], { type: 'text/csv' });
    console.log(blob)
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')

    const date = new Date()
    a.setAttribute('href', url)
    a.setAttribute('download', date+ ' '+ indicator);   
    a.click()
}