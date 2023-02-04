export default{
  name:'new_skills',
  title:'New_Skills',
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