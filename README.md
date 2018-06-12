# Space-Invader-Project-1-

#Juego:

Space Invaders

#Tecnología utilizada:

Javascript y canvas.

#¿Por qué Space Invaders?:

Es un juego que posibilita hacer una versión sencilla, pero completa en dos semanas, y que
tiene gran capacidad de evolución.

#Estructura:

El juego se compone de:
- HTML de inicio
- HTML de juego

Dentro de HTML 10 objetos:
1. Game: controla a todos los elementos del juego.
2. Background: tiene el fondo del juego.
3. Player: controla la creación del player, su movimiento, sus vidas, genera las balas.
4. Enemy: crea a un enemigo, controla el cambio de frames, controla las colisiones y
genera aleatoriamente las balas del enemigo.
5. EnemiesCollection: crea un conjunto de enemigos, controla su movimiento vertical.
6. Bullets: crea el objeto bala.
7. Live: crea el objeto vida.
8. Score: crea el objeto score.
9. GameOver: dibuja pantalla “game over”.
10. Win: dibuja pantalla “win”.

#Aproximación (funcionalidades desarrolladas):

Realizar pequeñas versiones de producto que funcionen por sí mismas y que puedan
evolucionarse en pequeños incrementos.

V1: comenzar con una versión básica de player con movimiento y de invader estático, pero con
cambio de frame.
V2: creación del objeto bullet y asignación a player (asociado a la pulsación de una tecla) e
invader (aleatorio).
V3: objetivo enemiesCollection que crea un array de invaders.
V4: desarrollar colisiones para player e invaders.
V5: gameOver por colisión de bala con el player.
V6: gameOver cuando los enemigos llegan a la posición “y” del player.
V7: crear matriz de enemigos. Adaptar todas las funcionalidades a la matriz.
V8: función pausa.
V9: Score. Añadir puntuación (10 ptos. cada enemigo).
V10: Vidas. Añadir 3 vidas al player antes de gameOver.
V11: incluir pantalla de inicio.
V12: incluir pantallas de GameOver y Win.

#Funcionalidades pendientes:

- Evitar que el player puede disparar muchas veces seguidas (con un setTimeOut). Ahora
solo puede disparar cada dos veces que pulsa la barra espaciadora.
- Evitar que los enemigos que están más arriba puedan disparar atravesando a los que
están más abajo
- Movimiento horizontal.
- Generación de más filas de invaders.
- Generación de diferentes invaders que sumen diferentes puntos.
- Obstáculos.
- Nave final (que cause más daño al player).

#Bugs a solucionar:

- Al comprobar las colisiones de las balas con enemiesCollection, se eliminan de la
matriz todos los enemigos que pasan por una posición (x, y) determinada.
- Comprobar colisiones con player: a veces dan algunos fallos.
- Cuando hay muchas filas de enemigos, el gameOver por llegar abajo no funciona
(puede que haya algún fallo con el método some).
- Las balas del enemigo desaparecen al matar al enemigo (porque pertenecen al objeto
enemy).
- En algunos momentos, el sonido no se reproduce.
