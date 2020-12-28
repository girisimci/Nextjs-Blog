const posts=[{

    title:'test baslik',
    details:'detay',
    date:'29 Aralık 2020'

},
{
    title:'baslik 2',
    details:'detay da 2',
    date:'önemi yok 2 işte'
},

{
    title:'baslik 3',
    details:'detaylarrrrrrrrrr da 3',
    date:'önemi yok 3 beeee'
}




];

export default(req,res) =>{
    res.json({posts});
};