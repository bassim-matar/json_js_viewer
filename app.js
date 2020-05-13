
function load_js_data(src) {
  return new Promise(resolve => {
    const head = document.getElementsByTagName('head')[0]
    tag = document.createElement('script')
    tag.type = 'text/javascript'
    tag.src = src
    tag.async = false
    tag.onload = () => resolve(data)
    head.appendChild(tag)
  })
}

(async () => {
  const data = await load_js_data('data.json.js')
  console.log(data)

  const max_row = 3000
  column_names = data.shift()
  data_preview = data.slice(0, max_row)
  column_names_dict = []
  for(const column_name of column_names){
    column_names_dict.push({title: column_name})
  }
  const table = $('#main_container table').DataTable({
    data: data_preview,
    columns: column_names_dict,
    colReorder: true,
    responsive: false,
    scrollY: "500px",
    scrollX: true,
    scrollCollapse: true,
    pageLength: 20,
    lengthMenu: [20, 100, 300, 1000],
    fixedColumns: {
      leftColumns: 1
    }
  })
  // new $.fn.dataTable.FixedHeader(table)
  $('.loading').hide()

  $('body').on('click', '.download_csv', () => {
    let csvContent = "data:text/csv;charset=utf-8,"
    csvContent += [column_names, ...data].map(e => e.join(';')).join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.style = "display: none"
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "my_data.csv")
    document.body.appendChild(link)
    link.click()
  })

  $('body').on('click', '.download_json_js', () => {
    let csvContent = "data:text/txt;charset=utf-8,data = \n"
    csvContent += JSON.stringify([column_names, ...data], null, 1)
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.style = "display: none"
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "my_data.json.js")
    document.body.appendChild(link)
    link.click()
  })
})()

