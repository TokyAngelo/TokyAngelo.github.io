
PrincipalFunction();
           function PrincipalFunction() {
            const displayForm = _('displayForm');
            const forLogin = _('forLogin');
            const FormLogin = _('FormLogin');
            const forRegister = _('forRegister');
            const FormRegister = _('FormRegister');
            const formContainer = _('formContainer');
            const formButton = _('formButton');
            const graphisme =_('graphisme');
            const graphismeTitle= _('graphismeTitle');
            const myDomaine = _('domaine');
            const multiserviceTitle =_('multiserviceTitle');
            const multiservice =_('multiservice');
            const nosDomaines = _('nosDomaines');
            const contactForm =_('contactForm');
            const Contact =_('contact');
            const Annulerbtn =_('Annulerbtn');
            const lougou =_('lougou');
            const my_container = _('container');
            const classicMode =_('classicMode');
            const nightMode =_('nightMode');
            const selectToggle =_('selectToggle');
        
            function mode() {
                nightMode.value="Mode classique"    
            };
            nightMode.addEventListener('click',()=>{
                document.body.classList.toggle('modeSombre');
                if (document.body.classList.contains('modeSombre')) {
                    mode();
                }else{
                    nightMode.value="Mode sombre"
                    nightMode.style.backgroundColor='blue'
                }
            });
            displayForm.addEventListener('click',showForm);
               forLogin.addEventListener('click', ()=>{
                   forLogin.classList.add('active');
                   forRegister.classList.remove('active');
                    if(FormLogin.classList.contains('toggleForm')) {
                        formContainer.style.transform = 'translate(0%)';
                        formContainer.style.transition = 'transform .3s';
                        FormRegister.classList.add('toggleForm');
                        FormLogin.classList.remove("toggleForm");
                    }
               })
                forRegister.addEventListener('click', ()=>{
                forLogin.classList.remove('active');
                forRegister.classList.add('active');
                    if(FormRegister.classList.contains('toggleForm')){
                        formContainer.style.transform = 'translate(-100%)';
                        formContainer.style.transition = 'transform .3s';
                        FormRegister.classList.remove('toggleForm');
                        FormLogin.classList.add('toggleForm');
                    }
                });
        function _(e) {
                   return document.getElementById(e);
               };
        Contact.addEventListener('click', NousContacter);
        function NousContacter(){
            contactForm.classList.toggle('Vue');
            contactForm.style.transition='transform 4s';
            if (myDomaine.classList.contains('hitamaso')) {
                myDomaine.classList.remove('hitamaso');
            }else if (document.querySelector('.form-wrapper .card').classList.contains('show')) {
                document.querySelector('.form-wrapper .card').classList.remove('show');
            };
               };
        nosDomaines.addEventListener('click', domaine);
        
        function slideShow(){
            setTimeout(() => {
                    graphismeTitle.style.transform='translateX(200%)';
                    graphismeTitle.style.transition='transform 3s';
                    graphisme.style.transform='translateX(150%)';
                    graphisme.style.transition='transform 3s';
                    multiservice.style.transform='translateX(150%)';
                    multiservice.style.transition='transform 3s';
                    multiserviceTitle.style.transform='translateX(200%)';
                    multiserviceTitle.style.transition='transform 3s';
            },1000);
            setTimeout(() => {
                    graphismeTitle.style.transform='translateY(550%)';
                    graphismeTitle.style.transition='transform 4s';
                    graphismeTitle.style.backgroundColor='purple';
                    multiserviceTitle.style.transform='translateY(-250%)';
                    multiserviceTitle.style.transition='transform 4s';
                    multiserviceTitle.style.backgroundColor='purple';
            }, 3000);   
            setTimeout(() => {
                slideBack();
            },7000 );
                    document.querySelector('.form-wrapper .card').style.transform='translateX(150%)';
                    document.querySelector('.form-wrapper .card').style.transition='transform 3s';
        };
        function slideBack(){
                    graphismeTitle.style.transform='translateY(0%)';
                    graphismeTitle.style.transition='transform 4s';

                    graphisme.style.transform='translateX(0%)';
                    graphisme.style.transition='transform 3s';
                    multiservice.style.transform='translateX(0%)';
                    multiservice.style.transition='transform 4s';
                    multiserviceTitle.style.transform='translateX(0%)';
                    multiserviceTitle.style.transition='transform 3s';
                    document.querySelector('.form-wrapper .card').style.transform='translateX(0%)';
                    document.querySelector('.form-wrapper .card').style.transition='transform 3s';
        }
        function domaine(){
            myDomaine.classList.toggle('hitamaso');
            myDomaine.classList.add('sombre');
            if (document.querySelector('.form-wrapper .card').classList.contains('show')) {
                document.querySelector('.form-wrapper .card').classList.remove('show');
            }
            slideShow();
        };
        function showForm() {
                   document.querySelector('.form-wrapper .card').classList.toggle('show');
                   if(myDomaine.classList.contains('hitamaso')){
                    myDomaine.classList.remove('hitamaso');
                   }
               };
           }
          