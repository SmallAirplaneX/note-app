import instance from './index'

export function createAttribute( data ) {
   return instance.post('/attribute/create',data)
}

export function getAttributeList() {
   return instance.get('/attribute/list')
}

export function quireAttribute( data ) {
   return instance.post('/attribute/quire',data)
}

// export function quireAttribute( data ) {
//    return instance.post('/attribute/delete',data)
// }

// export function quireAttribute( data ) {
//    return instance.post('/attribute/updata',data)
// }