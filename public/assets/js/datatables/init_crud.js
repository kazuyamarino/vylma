$(document).ready(function () {
  var table = $("#example_crud").DataTable({
    sPaginationType: "full_numbers",
    iDisplayLength: 5,
    aLengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "All"],
    ],
    stateSave: true,
    ajax: {
      url: base_url("crud/data.json"), // base_url can be managed in system.js located in the assets/js/config directory
    },
    columns: [
      { data: null, defaultContent: "", orderable: false },
      { data: "user_code" },
      { data: "user_name" },
      { data: "user_status" },
      { data: "create_date" },
      { data: "update_date" },
      { data: "additional_date" },
      { data: "id" },
    ],
    columnDefs: [
      {
        targets: 0,
        orderable: false,
        className: "select-checkbox",
        render: function (data, type, full, meta) {
          return '<input type="checkbox">';
        },
      },
      {
        targets: [3],
        className: "text-center",
        width: "8%",
      },
      {
        targets: [1, 2, 4, 5, 6],
        className: "text-center",
      },
      {
        targets: [7],
        className: "text-center",
        render: function (data, type, full, meta) {
          if (data) {
            return (
              '<div class="action-icon">' +
              '<a id="fetch-btn" href="' +
              base_url("crud/fetch/" + data) +
              '"><i class="far fa-edit"></i></a>' +
              '<a id="delete-btn" data-open="delete-modal" data-url="' +
              base_url("crud/delete/" + data) +
              '"><i class="far fa-trash-alt"></i></a>' +
              "</div>"
            );
          } else {
            return "";
          }
        },
      },
    ],
    select: {
      style: "multi",
      selector: "td:first-child input[type='checkbox']",
    },
    order: [[1, "asc"]],
    oLanguage: {
      oPaginate: {
        sFirst: "<i class='fas fa-angle-double-left'></i>",
        sLast: "<i class='fas fa-angle-double-right'></i>",
        sPrevious: "<i class='fas fa-angle-left'></i>",
        sNext: "<i class='fas fa-angle-right'></i>",
      },
    },
  });

  // Handle click on "Select all" control
  $("#select-all").on("click", function () {
    var rows = table.rows({ search: "applied" }).nodes();
    $('input[type="checkbox"]', rows).prop("checked", this.checked);
  });

  // Handle click on checkbox to set state of "Select all" control
  $("#example_crud tbody").on("change", 'input[type="checkbox"]', function () {
    if (!this.checked) {
      var el = $("#select-all").get(0);
      if (el && el.checked && "indeterminate" in el) {
        el.indeterminate = true;
      }
    }
  });

  // Handle reset button on Datatables
  $("#reset-filter").on("click", function () {
    table.search("").columns().search("").draw();
    table.state.clear();
  });

  // Handle form submission event
  $("#multidelete-frm").on("submit", function (e) {
    var form = this;
    var rows_selected = table.column(0).checkboxes.selected();
    $.each(rows_selected, function (index, rowId) {
      $(form).append(
        $("<input>").attr("type", "text").attr("name", "admin_id[]").val(rowId)
      );
    });
  });
});
