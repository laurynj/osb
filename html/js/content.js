$(document).ready(function() {
    $('.openBtn').on('click', function() {
        var target = $(this).data('target');
        $(target).addClass('on');
    });

    $('.closeBtn').on('click', function() {
        $(this).closest('.layerPopWrap').removeClass('on');
    });

    //on버튼 이동
    $('.onCheckBtn a, .onCheckBtn button, .thisOnBtn').on('click', function() {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });

    //숨김 보기
    function toggleBalance(show) {
        $('.accoHide .comSmBtn').text(show ? '숨김' : '보기').data('action', show ? 'hide' : 'show');
        $('.balance').toggle(show);
        $('.noBalance').toggle(!show);
    }

    $('.accoHide .comSmBtn').click(function() {
        const action = $(this).data('action');
        toggleBalance(action === 'show');
    });

    // 초기 상태 설정
    toggleBalance(true);

    //이체 상세정보 아코디언
    $('.detailInfoAcco').on('click', function() {
        $(this).find('button').toggleClass('on');
        $(this).next('.detailInfoBox').slideToggle(300);
    });

    // 전체계좌 아코디언
    $('.accoHead').on('click', function() {
        var $this = $(this);
        var $content = $('#' + $this.attr('aria-controls'));
        var isExpanded = $this.attr('aria-expanded') === 'true';

        // Toggle the section
        if (!isExpanded) {
            // Open the content
            $this.attr('aria-expanded', 'true');
            $content.slideDown(300).attr('hidden', false);
            $this.focus(); // Optionally, focus the button for better user experience
        } else {
            // Close the content
            $this.attr('aria-expanded', 'false');
            $content.slideUp(300).attr('hidden', true);
        }

        // Toggle class for current item
        $this.closest('.accoItem').toggleClass('on', !isExpanded);
    });

    // Handle keydown events for accessibility
    $('.accoHead').on('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent default behavior for keydown event
            $(this).trigger('click'); // Trigger click event
        }
    });
});