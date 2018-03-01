// ADD PRODUTO A LISTA
$('.prod-add-cart').click(function(){
    var id = $(this).data('id');
    //var input = $(this).parent().find('#view_cartTotalItens');
    var input = $(this).parent().find('.quantity');
    var quantity = input.val();
    $.post("/cart/add_to_cart", {id: id, quantity: quantity}, function(data){
        if(data['error'] == true){
            alert(data['message']);
        }else{
            console.log(data);
            var total = "R$ " + data["total"].toFixed(2).replace('.',',');
            $('#view_cartTotalItens').text(data["total_items"]);
            $('#view_cartTotalValue').text(total);
            $('#modal-container').html('<div class="modal-dialog"><div class="modal-content" style="overflow: hidden;"><div class="modal-body" style="color: darkcyan;"><h3 class="text-center">Produto adicionado com sucesso.</h3></div><div class="modal-footer" style="border: 0 none; margin-top: 0; padding: 20px 0 0; text-align: left;"><button type="button" class="btn btn-info" data-dismiss="modal" style="background: #666; border-radius: 0; border-color: #555;"><i class="glyphicon glyphicon-pushpin"></i>&nbsp;&nbsp;Continuar comprando</button><a href="/cart/view_cart" class="btn btn-success pull-right" style="border-radius: 0;"><i class="glyphicon glyphicon-credit-card"></i>&nbsp;&nbsp;Ir para o CARRINHO</button></div></div></div>');
            $('#modal-container').modal();
            //alert("Produto adicionado ao carrinho de compras!");
        }
    }, 'json');
    return false;
});
