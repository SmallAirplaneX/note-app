import instance from './index'

export function createAttribute( data ) {
   return instance.post('/postAttribute',data)
}

export function getAttributeList() {
   return instance.get('/getAttributeList')
}