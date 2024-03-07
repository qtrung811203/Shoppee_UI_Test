const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// Bắt sự kiện bấm nút đăng kí header
const headerBtn = $('li.header__navbar-item--login')
headerBtn.addEventListener('click', ()=>{
    const modal = $('div.modal')
    modal.classList.remove('modal--inactive')
    openLoginMenu()
})

//Bắt sự kiện khi bấm nút trở lại trong modal
const backMainButtons = $$('button.auth-form__control-back')
for(var button of backMainButtons){
    button.addEventListener('click', () => {
        const modal = $('div.modal')
        modal.classList.add('modal--inactive')
    })
}


//Bắt sự kiện nút chuyển đăng kí, đăng nhập
const loginBtn = $('div.auth-form--register span.auth-form__switch-btn')
const registerBtn = $('div.auth-form--login span.auth-form__switch-btn')
loginBtn.addEventListener('click', () => {
    openLoginMenu();
})
registerBtn.addEventListener('click', () => {
    openRegisterMenu();
})


function openLoginMenu(){
    const formAuthLogin = $('div.auth-form--login')
    const formAuthRegister = $('div.auth-form--register')
    formAuthLogin.classList.remove('auth-form--inactive')
    formAuthRegister.classList.add('auth-form--inactive')
}

function openRegisterMenu(){
    const formAuthLogin = $('div.auth-form--login')
    const formAuthRegister = $('div.auth-form--register')
    formAuthLogin.classList.add('auth-form--inactive')
    formAuthRegister.classList.remove('auth-form--inactive')
}