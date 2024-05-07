$(document).ready( function () {
    var table = $('#myTable').DataTable({
        stateSave: true,
        "paging": true,
        "pageLength": 50,
        scrollX: true,
        fixedColumns: true,
        searchPanes: {
            cascadePanes: true,
            layout: 'columns-1',
            collapse: false,
            orderable: false,
            dtOpts: {
              scrollY: '212px'
            }
        },
        dom: 'Plfrtip',
        columnDefs: [
            // { "width": "5%", "targets": 0 },
            // { "width": "10%", "targets": 1 },
            // { "width": "50%", "targets": 2 },
            // { "width": "10%", "targets": 3 },
            // { "width": "1000px", "targets": 6 },
            {
                searchPanes: {
                    show: false
                },
                // targets: [5, 3]
            },
            {
                targets: [-1],
                visible: false
            }
        ],
        autoWidth: false,
        createdRow: function (row, data, dataIndex) {
            var linkHtml = data[data.length - 1];
            var url = $(linkHtml).attr('href');
            $(row).attr('data-url', url);
        }
    });
    table.column( 0 ).visible( false );
    table.column( -1 ).visible( false );

    document
        .querySelector('div.dtsp-verticalPanes')
        .appendChild(table.searchPanes.container().get(0));

    $("#myTable").on('click', 'tr', function (e) {
        var url = $(this).data('url');
        if (url) {
            window.location.href = url;
        } 
    });

    var hamburgerBtn = document.getElementById('hamburgerBtn');
    var verticalContainer = document.querySelector('.dtsp-verticalPanes');

    function toggleVerticalContainer() {
      if (verticalContainer.style.display != 'flex') {
        verticalContainer.style.display = 'flex';
        hamburgerBtn.textContent = 'Hide filters';
      } else {
        verticalContainer.style.display = 'none';
        hamburgerBtn.textContent = 'Show filters';
      }
    }

    function handleResize() {
      if (window.innerWidth > 965) {
        verticalContainer.style.display = 'flex';
      } else {
        verticalContainer.style.display = 'none';
      }
    }

    hamburgerBtn.addEventListener('click', toggleVerticalContainer);
    window.addEventListener('resize', handleResize);
} );
