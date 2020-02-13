import { createGlobalStyle } from 'styled-components';
import Swal from 'sweetalert2'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
    font-family: 'Kanit', sans-serif;
  }
  html {
  }
  body {
    box-sizing: border-box;
    
  }

  .slick-list: focus {
    outline: none;
  }

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus {
  outline: none;
}
`;

export default GlobalStyles;


export const showErrorDialog = (text) => {
  let title = "ขออภัย มีข้อผิดพลาดกับทางระบบ"
  if (text !== null && text !== undefined) {
    title = text
  }
  let timerInterval
  Swal.fire({
    icon: 'error',
    title: title,
    html: 'การแจ้งเตือนจะปิดอัตโนมัติใน <b><b> วินาที',
    timer: 2000,
    timerProgressBar: true,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: false,
    onBeforeOpen: () => {
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = parseInt(Swal.getTimerLeft() / 1000) + 1
          }
        }
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  })
}

export const showMixinDialog = (text) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: text ?? ""
  })
}

export const redirect404 = (text) => {
  window.location.href = "/404";
}