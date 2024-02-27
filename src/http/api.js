import instance from './index'

// const api = [
//    {
//       name: "attribute",
//       get:['list'],
//       post:['create','quire','delete']
//    },
//    {
//       name: "template",
//       get:['list'],
//       post:['create','quire','delete']
//    }
// ]

// function getApi(params) {
//       api.array.forEach(element => {
//          if (params) {
            
//          }

//       });
// }



export function createAttribute(data) {
   return instance.post('/attribute/create', data)
}

export function getAttributes() {
   return instance.get('/attribute/list')
}

export function quireAttribute(data) {
   return instance.post('/attribute/quire', data)
}

export function deleteAttribute( data ) {
   return instance.post('/attribute/delete',data)
}

export function getTemplates() {
   return instance.get('/template/list')
}
