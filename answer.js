// TODO: add memo item

const textDom = document.getElementById('memo-textbox');
const memoItemsList = document.getElementById('memo-items-list');
const clearBtn = document.getElementById('clear-button');

textDom.setAttribute('placeholder', '请输入内容');

document.onkeydown = function (e) {
    const list = [];
    if (e.keyCode === 13) {
        list.push(textDom.value);
        textDom.value = ''
    }

    list.map(item => {
        const memoItem = document.createElement('p');
        memoItem.innerHTML = item;
        memoItemsList.appendChild(memoItem)
    })
}


clearBtn.onclick = function () {
    const confirm = createConfirm();
    document.body.appendChild(confirm);
    confirm.children[0].onclick = function () {
        while (memoItemsList.hasChildNodes()) {
            memoItemsList.removeChild(memoItemsList.firstChild);
        }
    }
    confirm.children[1].onclick = function () {
        document.body.removeChild(confirm);

    }
}

function createConfirm() {
    const confirm = document.createElement('div');
    const yesBtn = document.createElement('button');
    yesBtn.innerHTML = '清空';
    yesBtn.style.marginRight = '10px'
    const noBtn = document.createElement('button');
    noBtn.innerHTML = '取消';
    confirm.appendChild(yesBtn);
    confirm.appendChild(noBtn);
    return confirm
}




