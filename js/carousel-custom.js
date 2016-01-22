
window.onload = function(){
	$(function() {
		var _center = {
			width: 188,
			height: 275,
			marginLeft: 0,
			marginTop: 0,
			marginRight: 0
		};
		var _left = {
			width: 160,
			height: 234,
			marginLeft: 0,
			marginTop: 20,
			marginRight: -90
		};
		var _right = {
			width: 160,
			height: 234,
			marginLeft: -90,
			marginTop: 20,
			marginRight: 0
		};
		var _outLeft = {
			width: 160,
			height: 234,
			marginLeft: 0,
			marginTop: 20,
			marginRight: -90
		};
		var _outRight = {
			width: 160,
			height: 234,
			marginLeft: -90,
			marginTop: 20,
			marginRight: 0
		};
		$('#carousel').carouFredSel({
			width: 325,
			height: 400,
			align: false,
			items: {
				visible: 3,
				width: 100
			},
			scroll: {
				items: 1,
				duration: 400,
				onBefore: function( data ) {
					data.items.old.eq( 0 ).animate(_outLeft);
					data.items.visible.eq( 0 ).animate(_left);
					data.items.visible.eq( 1 ).animate(_center);
					data.items.visible.eq( 2 ).animate(_right).css({ zIndex: 1 });
					data.items.visible.eq( 2 ).next().css(_outRight).css({ zIndex: 0 });

					setTimeout(function() {
						data.items.old.eq( 0 ).css({ zIndex: 1 });
						data.items.visible.eq( 0 ).css({ zIndex: 2 });
						data.items.visible.eq( 1 ).css({ zIndex: 3 });
						data.items.visible.eq( 2 ).css({ zIndex: 2 });
					}, 200);
				}
			}
		});
		$('#carousel').children().eq( 0 ).css(_left).css({ zIndex: 2 });
		$('#carousel').children().eq( 1 ).css(_center).css({ zIndex: 3 });
		$('#carousel').children().eq( 2 ).css(_right).css({ zIndex: 2 });
		$('#carousel').children().eq( 3 ).css(_outRight).css({ zIndex: 1 });
	});
};