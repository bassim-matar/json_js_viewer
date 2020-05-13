console.log(data)
const max_row = 3000
column_names = data.shift()
data = data.slice(0, max_row)
column_names_dict = []
for(const column_name of column_names){
  column_names_dict.push({title: column_name})
}
const table = $('#main_container table').DataTable({
  data: data,
  columns: column_names_dict,
  responsive: false
})
new $.fn.dataTable.FixedHeader(table)
$('.loading').hide()