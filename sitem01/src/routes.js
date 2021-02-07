import anasayfa from './components/anasayfa';
import giris from './user/giris';
import kayit from './components/kayit';
import Kullanici from './user/Kullanici'

export const routes=[
    {path: '/', component : anasayfa},
    {path: '/kayit', component : kayit},
    {path: '/user', component : giris},
    {path: '/kullanici' , component: Kullanici},
]