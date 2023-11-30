

const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement

  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: '50%'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }
  }

  document.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
  })


})


$(document).ready(function() {
            var n = $(".flower1 span").length;
            var val = -90;
            var ans = 20;
            $(".flower1 span").not(":first-child").click(function() {
                $(".flower1 span").css({
                    "transform": "translate(-50%, -50%) rotate(" + 0 + "deg)"
                });
                $(".flower1 span").not(":first-child").fadeOut(450);

            });
            $(".flower1 span").eq(0).click(function() {
                $(".flower1 span").fadeIn(500);
                for (i = 0; i < n; i++) {
                    var an2 = ans * i - 90;
                    $(".flower1 span").eq(i).css({
                        "transform": "translate(-50%, -50%) rotate(" + an2 + "deg)"
                    });
                }
            });
            for (i = 0; i < n; i++) {
                var an2 = ans * i - 90;
                $(".flower1 span").eq(i).css({
                    "transform": "translate(-50%, -50%) rotate(" + an2 + "deg)"
                })
            }
        });

$(".Click-here").on('click', function() {
  $(".custom-model-main").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});
