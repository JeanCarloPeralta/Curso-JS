const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html')

info.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel purus posuere, tristique lorem id, vulputate risus. In molestie libero sit amet odio semper blandit. Morbi ultrices mauris ligula, eu interdum neque tempus eu. Praesent feugiat ornare cursus. Nam vel sapien in lectus sollicitudin accumsan quis eget mauris. Praesent dapibus odio vel arcu consectetur, quis dictum nulla egestas. Nulla eu nunc tellus. Etiam ut libero mauris. Ut sit amet porttitor tortor. Suspendisse quis est a ante ornare tincidunt in non nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed accumsan, lectus quis eleifend egestas, purus nunc blandit nulla, nec mattis nulla ante id risus. Praesent metus est, scelerisque id odio bibendum, mattis scelerisque ligula. Ut augue ipsum, ornare sit amet nisl quis, convallis ullamcorper enim. Maecenas lacinia tristique finibus.'

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);
   
   
    listItem.onclick = function(event) {
        event.stopPropagation();
        const listContent = prompt('Change your color?');
        this.textContent = listContent;

    }
}