var input = $('.input_btn');

$('.btn').each(function(){
    $(this).on('click', function(){
        if($(this).val() == 'AC'){
            input.val('');
        } else if($(this).val() == '='){
            input.val(eval(input.val()));
        } else {
            if($(this).val() == 'Del'){
                if(typeof input.val() == "number"){
                    input.val(String(input.val()));
                } 
                if(input.val().length > 0){
                    input.val(input.val().slice(0, -1));
                }
            } else {
                input.val(input.val() + $(this).val());
            }
        }
    })
});