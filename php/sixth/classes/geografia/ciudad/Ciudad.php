<?php
namespace geografia\ciudad;
class Ciudad {
 private $nombre, $poblacion;

    public function __construct($nombre, $poblacion) {
        $this->nombre = '';
        $this->poblacion = 0;
    }

function setNombre($nombre){
    $this->nombre=$nombre;
}
function setPoblacion($poblacion){
    $this->poblacion=$poblacion;
}
}