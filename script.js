$(document).ready( function () {
    var table = $('#myTable').DataTable({
        "paging": true,
        "pageLength": 25,
        order: [[1, 'asc']],
        scrollX: true,
        searchPanes: {
            cascadePanes: true,
            layout: 'columns-3',
            collapse: false,
            orderable: false,
            dtOpts: {
              scrollY: '248px'
            }
        },
        dom: 'Plfrtip',
        columnDefs: [{
                searchPanes: {
                    show: false
                },
                targets: [5, 3]
            },
        ],
        autoWidth: false,
    });
    table.column( 0 ).visible( false );
} );
