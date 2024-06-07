create database biblios;
use biblios;

create table usuario (
id int primary key auto_increment,
nomeUsuario varchar(45),
email varchar(100),
senha varchar(30)
); 

create table quiz (
numeroResposta int primary key auto_increment,
fkUsuario int,
qtdAcertos int,
qtdErros int,
constraint fkusuario_quiz foreign key (fkUsuario) references usuario (id)
);