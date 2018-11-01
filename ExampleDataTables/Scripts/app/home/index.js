let dataTable = $("#table-names").DataTable({

})

$(document).on("submit", "#form-name", (event) => {
    //se evita que el formulario se envie al dar enter
    event.preventDefault();
    let tableData = $("#table-names").DataTable().data().toArray()
    let userList = []

    tableData.forEach((item, index) => {
        userList.push({
            Name: item[1],
            LastName: item[2]
        });
    })

    let data = {
        userList: userList
    }

    console.group("Datos enviados al servidor");
    console.log(data)
    console.groupEnd();

    $.ajax({
        type: "POST",
        url: "../Home/SaveUsers",
        cache: false,
        data: data,
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError)
        },
    }).done((response) => {
        console.group("Datos recibidos en el servidor");
        console.log(response);
        console.groupEnd();
    })

});

$(document).on("click", "#btn-add-table", (event) => {
    event.preventDefault()
    let name = $("#txt-name").val()
    let lastName = $("#txt-lastname").val()

    //busca la tabla
    let table = $("#table-names")

    //obtiene los datos de la tabla
    let tableData = $("#table-names").DataTable().data().toArray()

    //para debuggear los puedes mostrar en la consola F12
    //sirve para hacer validaciones sobre si ya estan o no los datos
    
    //boton para eliminar
    let btnDelete = '<button type="button" class="btn btn-danger btn-sm waves-effect btn-delete-table-row">\
                                    <span class="glyphicon glyphicon-remove"></span>\
                                </button>';

    //agrega los datos a la tabla en forma de arreglo
    table.DataTable().row.add([tableData.length + 1, name, lastName, btnDelete]).draw(false);
})
