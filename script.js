$(document).ready( function () {
    var table = $('#myTable').DataTable({
        "paging": false,
        scrollX: true,
        searchPanes: {
            cascadePanes: true,
            layout: 'columns-3',
            collapse: false,
            orderable: false,
            dtOpts: {
              scrollY: '212px'
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