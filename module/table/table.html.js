template.table = `
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <!-- {{#column_names}} -->
          <th>{{.}}</th>
          <!-- {{/column_names}} -->
        </tr>
      </thead>
      <tbody>
        <!-- {{#rows_to_render}} -->
        <tr>
          <td>{{row_num}}</td>
          <!-- {{#row_values}} -->
          <td>{{.}}</td>
          <!-- {{/row_values}} -->
        </tr>
        <!-- {{/rows_to_render}} -->
      </tbody>
    </table>
  </div>
`