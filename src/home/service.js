// 模拟接口数据
const mock = {
    response: {
        ack: 'success'
    },
    data: {
        count: 10
    }
}

class Service {
    // 模拟网络请求
    fetchHomeCount = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (mock.response.ack === 'success') {
                    resolve(mock.data)
                } else {
                    reject();
                }
            }, 1000)
        })
    }
}
export default new Service