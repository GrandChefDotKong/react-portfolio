export default{
  name:'exp_skills',
  title:'Exp_Skills',
  type: 'document',
  fields:[
      {
          name:'name',
          title:'Name',
          type:'string'
      },
      {
          name:'bgColor',
          title:'BgColor',
          type:'string'
      },
      {
          name:'icon',
          title:'Icon',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
      
  ]
}