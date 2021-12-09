var names_of_students=[];

function submit(){
    var name_1=document.getElementById("name_of_student_1").value;
    var name_2=document.getElementById("name_of_student_2").value;
    var name_3=document.getElementById("name_of_student_3").value;
    var name_4=document.getElementById("name_of_student_4").value;
    var name_5=document.getElementById("name_of_student_5").value;

    names_of_students.push(name_1);
    names_of_students.push(name_2);
    names_of_students.push(name_3);
    names_of_students.push(name_4);
    names_of_students.push(name_5);

    document.getElementById("display_names").innerHTML=names_of_students;
    document.getElementById("submit_click").style.display= none;
    document.getElementById("sort_click").style.display=inline-block;
}

function sort(){
    names_of_students.sort();
    document.getElementById("display_names").innerHTML=names_of_students;
}