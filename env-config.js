const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://rmail.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://rmail.herokuapp.com',
    'process.env.CLIENT_ID': '6SOL1NBuonS9N3WaQ7e5y8FsWCJ3gWPG'
}