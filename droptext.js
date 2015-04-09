(function ( $ ) {
	$.fn.droptext = function( options ) {

		var settings = $.extend({
			//options here
		}, options );

		var dropdown = $('#basicSelect');
		var textbox = $('#basicText');

		var data = [
			{
				'type': 'dropdown',
				'name': 'dropdown_name',
				'options': [
					'123.123.123.123',
					'222.222.222.222'
				]
			},
			{
				'type': 'dropdown',
				'name': 'dropdown2_name',
				'options': [
					'value1',
					'value2',
					'value3'
				]
			},
			{
				'type': 'textbox',
				'name': 'dropdown2_name',
				'options': [
					'value1',
					'value2',
					'value3'
				]
			}
		];

		var form = $(this);

		//Build the elements on the page according to the data represented
		$.each(data, function(index, dataObject) {
			var element; //scope issues
			switch(dataObject.type) {
				case 'dropdown': //dropdown
					element = dropdown.clone();
					$.each(dataObject.options, function(index, value){
						element.append(
							$("<option></option>")
							.attr('value', value)
							.text(value)
						)
						.attr('name', dataObject.name)
						.attr('id', dataObject.name)
						.addClass('form-element');
					});
					break;

				default: //text box
					element = textbox.clone();
					element.attr('name', dataObject.name);
					element.attr('id', dataObject.name);
					element.addClass('form-element')
					break;
			}
			form.append(element);
		});

		//Append a listener to the
		form.submit(function( event ) {
			event.preventDefault();
			var text = "";
			$('.form-element').each(function(index, elem){
				text += $(elem).val() + " ";
			});
			var element = $(document.createElement('p')).text(text);
		  $('#result').append(element);
		});

		return this;
	};
}( jQuery ));