function $(id) {
  return document.getElementById(id);
}

function loadMemoItemslist() {
  var memoItemsListDom = $('memo-items-list');
  while (memoItemsListDom.firstChild) {
    memoItemsListDom.removeChild(memoItemsListDom.firstChild);
  }

  var memoItems = JSON.parse(localStorage.getItem('memoItems') || '[]');
  var n = 0;
  memoItems.forEach((item) => {
    n++;
    var memoItemDom = document.createElement('p');
    memoItemDom.innerHTML = n + ". " + item;
    memoItemsListDom.appendChild(memoItemDom);
  });
}

$('clear-button').addEventListener('click', (evt) => {
  localStorage.removeItem('memoItems');
  loadMemoItemslist();
});

loadMemoItemslist();
$('memo-textbox').focus();
