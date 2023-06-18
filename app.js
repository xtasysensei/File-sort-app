"use strict";

const select = document.querySelector(".select");
const upload = document.querySelector(".upload");
const displayList = document.querySelector(".file-list");
const sortName = document.querySelector(".name-radio");
const sortSize = document.querySelector(".size-radio");
const sortDate = document.querySelector(".date-radio");
let file;
let fileList = [];

let uploadedFile = JSON.parse(localStorage.getItem("fileItems"));

//add function
const addFile = function () {
	if (select.value) {
		file = select.files[0];
		console.log(file);
		fileList.push(`Name: ${file.name}<br/>
					File size: ${Math.floor(file.size / 1024)}kb<br/>
					Last modified date: ${file.lastModifiedDate}`);
		select.value = "";
	}
};

//save function
const save = function () {
	localStorage.setItem("fileItems", JSON.stringify(fileList));
};

//display function
const displayFile = function () {
	let items = "";
	uploadedFile.forEach((fileItem, index) => {
		items += `<li>
					<p>${fileItem} </p>
					<button class="del-btn" onclick = del(${index})>x</button><hr/><br/>
				</li>`;
	});

	displayList.innerHTML = items;
};

if (uploadedFile) {
	fileList = uploadedFile;
	displayFile();
}

//upload function
const uploadFile = function () {
	save();
	addFile();
	displayFile();
};

upload.addEventListener("click", uploadFile);

//delete function
const del = function (num) {
	fileList.splice(num, 1);
	save();
	displayFile();
};

//sorting
const sortByName = function () {};

const sortBySize = function () {};

const sortByDate = function () {};

sortName.addEventListener("click", sortByName);
sortSize.addEventListener("click", sortBySize);
sortDate.addEventListener("click", sortByDate);
