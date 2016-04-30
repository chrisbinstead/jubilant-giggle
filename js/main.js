$(document).ready(function($){
	var projectsBlocks = $('.cmb-projects-block'),
		offset = 0.8;

	//hide projects blocks which are outside the viewport
	hideBlocks(projectsBlocks, offset);

	//on scolling animate projects blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(projectsBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(projectsBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cmb-projects-img, .cmb-projects-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cmb-projects-img').hasClass('is-hidden') ) && $(this).find('.cmb-projects-img, .cmb-projects-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});