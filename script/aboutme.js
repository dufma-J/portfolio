const frame = document.querySelector("#aboutme .wrap");
const lists = frame.querySelectorAll("#aboutme article");
const prev = document.querySelector("#aboutme .btnPrev");
const next = document.querySelector("#aboutme .btnNext");

const moon = document.querySelector('#aboutme .moon img')
const deg = 45; //각각의 article요소가 회전할 각도
const len = lists.length - 1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
let i = 0;
let num = 0;
let active = 0;

function activation(index, lists) {
    for (let el of lists) {
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}

//article의 개수만큼 반복 
for (let el of lists) {
    let pic = el.querySelector(".pic");

    //각 article 요소를 45도씩 회전하고 아래로 배치
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
    i++;
}

//prev 버튼 클릭 시
prev.addEventListener("click", () => {

    //num값을 증가시키며 frame 45도 만큼 증가시키며 시계 방향으로 계속 회전
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;
    moon.style.transform = `translate(-50%, -50%) rotate(${deg * num}deg)`;

    (active == 0) ? active = len : active--;
    activation(active, lists);
});

//next 버튼 클릭시
next.addEventListener("click", () => {

    //num값을 감소시키며 frame을 45도 만큼 감소시키며 반시계 방향으로 회전
    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;
    moon.style.transform = `translate(-50%, -50%) rotate(${deg * num}deg)`;

    (active == len) ? active = 0 : active++;
    activation(active, lists);
});



var camera1, camera2, scene1, scene2, renderer1, renderer2;

var isUserInteracting = false,
    onMouseDownMouseX = 0,
    onMouseDownMouseY = 0,
    lon = 0,
    onMouseDownLon = 0,
    lat = 0,
    onMouseDownLat = 0,
    phi = 0,
    theta = 0;

init2();
animate2();

function init2() {

    var container1, mesh1;
    var container2, mesh2;

    container1 = document.getElementById('space-container');
    container2 = document.getElementById('space-container-top');

    camera1 = new THREE.PerspectiveCamera(155, window.innerWidth / window.innerHeight, 1, 3000);
    camera1.target = new THREE.Vector3(0, 0, 0);

    camera2 = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 3000);
    camera2.target = new THREE.Vector3(0, 0, 0);

    scene1 = new THREE.Scene();
    scene2 = new THREE.Scene();

    var geometry1 = new THREE.SphereGeometry(1500, 160, 40);
    geometry1.scale(-1, 1, 1);

    var geometry2 = new THREE.SphereGeometry(500, 160, 40);
    geometry2.scale(-1, 1, 1);

    THREE.TextureLoader.prototype.crossOrigin = '';

    var material2 = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space2.svg')
    });

    mesh2 = new THREE.Mesh(geometry2, material2);
    scene2.add(mesh2);


    renderer1 = new THREE.WebGLRenderer({ alpha: true });
    renderer1.setPixelRatio(window.devicePixelRatio);
    renderer1.setSize(window.innerWidth, window.innerHeight);
    container1.appendChild(renderer1.domElement);

    renderer2 = new THREE.WebGLRenderer({ alpha: true });
    renderer2.setPixelRatio(window.devicePixelRatio);
    renderer2.setSize(window.innerWidth, window.innerHeight);
    container2.appendChild(renderer2.domElement);

    renderer1.domElement.id = 'canvas-bottom';
    renderer2.domElement.id = 'canvas-top';

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);

    //

    document.addEventListener('dragover', function (event) {

        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';

    }, false);

    document.addEventListener('dragenter', function (event) {

        document.body.style.opacity = 0.5;

    }, false);

    document.addEventListener('dragleave', function (event) {

        document.body.style.opacity = 1;

    }, false);

    document.addEventListener('drop', function (event) {

        event.preventDefault();

        var reader = new FileReader();
        reader.addEventListener('load', function (event) {

            material.map.image.src = event.target.result;
            material.map.needsUpdate = true;

        }, false);
        reader.readAsDataURL(event.dataTransfer.files[0]);

        document.body.style.opacity = 1;

    }, false);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {
    camera1.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth, window.innerHeight);

    camera2.aspect = window.innerWidth / window.innerHeight;
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
    event.preventDefault();

    isUserInteracting = true;

    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;
}

function onDocumentMouseMove(event) {
    if (isUserInteracting === true) {
        lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
    }
}

function onDocumentMouseUp(event) {

    isUserInteracting = false;

}

function animate2() {

    requestAnimationFrame(animate2);
    update2();

}

function update2() {
    lon += 0.05;
    lat = Math.max(-200, Math.min(1000, lat));
    phi = THREE.Math.degToRad(300 - lat);
    theta = THREE.Math.degToRad(lon);

    camera1.target.x = 3000 * Math.sin(phi) * Math.cos(theta);
    camera1.target.y = 3000 * Math.cos(phi);
    camera1.target.z = 500 * Math.sin(phi) * Math.sin(theta);

    camera2.target.x = 1500 * Math.sin(phi) * Math.cos(theta);
    camera2.target.y = 500 * Math.cos(phi);
    camera2.target.z = 500 * Math.sin(phi) * Math.sin(theta);

    camera1.lookAt(camera1.target);
    camera2.lookAt(camera2.target);

    renderer1.render(scene1, camera1);
    renderer2.render(scene2, camera2);
}
