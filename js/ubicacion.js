
let nombre = document.querySelector('.sucursal')
let direccion = document.querySelector('.direccion');
let horario = document.querySelector('.horario');
let telefono = document.querySelector('.telefono');
let celular = document.querySelector('.celular');
let mapa = document.querySelector('.mapa');

let lugar = sessionStorage.getItem('ubicacion');
let opcion = document.querySelector('#ubicacion');

const sucursales = [
    {
        nombre: 'Impermeabilizantes Norkply Puebla',
        direccion: 'C. 35 Sur 2703, Sta Cruz los Ángeles, 72000 Heroica Puebla de Zaragoza, Pue.',
        horario: 'Lunes a Sabado - 8:00 am a 6:00 pm',
        telefono: '222 888 9999',
        celular: '999 777 8978',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.6888987848065!2d-98.23197296348053!3d19.047120008842423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc728c2349487%3A0xe0ce1b706eedb27b!2sImpermeabilizantes%20Norkply%20Puebla!5e0!3m2!1ses!2smx!4v1746324449186!5m2!1ses!2smx',
        lugar: 'Puebla'

    },

    {
        nombre: 'Impermeabilizantes Norkply Toluca',
        direccion: 'Blvr. José María Pino Suárez 604-Local A, Cuauhtémoc, 50130 Toluca de Lerdo, Méx.',
        horario: 'Lunes a Sabado - 8:00 am a 6:00 pm',
        telefono: '322 888 9999',
        celular: '879 777 8978',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7913199193226!2d-99.65156333234971!3d19.283164786399933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89915f5c8445%3A0xfff0c5131b4b89a3!2sImpermeabilizantes%20Norkply%20Toluca!5e0!3m2!1ses-419!2smx!4v1746562526845!5m2!1ses-419!2smx',
        lugar: 'Toluca'

    },

    {
        nombre: 'Impermeabilizantes Norkply Apizaco',
        direccion: 'Calle 5 de Febrero 112, Av Xicohtencatl Esquina, Centro, 90300 Cdad. de Apizaco, Tlax.',
        horario: 'Lunes a Sabado - 8:00 am a 6:00 pm',
        telefono: '882 888 9999',
        celular: '559 777 8978',
        mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12221.554315068024!2d-98.14588787361913!3d19.418449918670625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d020246a0d5c43%3A0xa8a366c1c087dd0a!2sImpermeabilizantes%20Norkply%20Apizaco!5e0!3m2!1ses-419!2smx!4v1746562465158!5m2!1ses-419!2smx',
        lugar: 'Apizaco'


    },

    {
        nombre: 'Planta Norkply',
        direccion: 'Av. Monasterios 15, PARQUE INDUSTRIAL, 52600 Santiago Tianguistenco de Galeana, Méx.',
        horario: 'Lunes a Sabado - 8:00 am a 6:00 pm',
        telefono: '222 888 9999',
        celular: '999 777 8978',
        mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15825.749505475735!2d-99.48796130905754!3d19.17605433554525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf310a237ffc1%3A0x816371009ca44550!2sGrupo%20Nork%20Internacional%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1746565891318!5m2!1ses-419!2smx',
        lugar: 'Planta'


    }
]

//desde la pagina principal
if (lugar && opcion.querySelector(`option[value="${lugar}"]`)) {
    opcion.value = lugar;
    informacionSucursal(lugar);
}

//desde ubicaciones
opcion.addEventListener('change', (e) => {
    i = e.target.value;
    informacionSucursal(i);
})

function informacionSucursal(suc) {
    sucursales.forEach((sucursal) => {
       
        if (sucursal.lugar == suc) {
            nombre.textContent = sucursal.nombre;
            direccion.textContent = sucursal.direccion
            horario.textContent = sucursal.horario;
            telefono.textContent = sucursal.telefono;
            celular.textContent = sucursal.telefono;
            mapa.src = sucursal.mapa;
        }

    })
}