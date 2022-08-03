#b n N
import pygame, sys, time;

pygame.init();
xScreen = 800;
yScreen = 600;
surf = pygame.display.set_mode((xScreen,yScreen));
screen = pygame.display;
keys = {
    'w':False,
    'a':False,
    'd':False,
    's':False
}

class Player:
    x=10;
    y=yScreen;
    
    def __init__(self,width,height):
        self.width = width;
        self.heigth = height;
    def gravity(self):
        self.y += 0.5;

player1 = Player(25,50);  
jump = False
runGame = True;

while runGame:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit();
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                sys.exit();
            if event.key == pygame.K_w and player1.y > yScreen - 10:
                keys['w'] = True;
            if event.key == pygame.K_a:
                keys['a'] = True;
            if event.key == pygame.K_s:
                keys['s'] = True;
            if event.key == pygame.K_d:
                keys['d'] = True;
                
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_a:
                keys['a'] = False;
            if event.key == pygame.K_s:
                keys['s'] = False;
            if event.key == pygame.K_d:
                keys['d'] = False;
            print(player1.y)

    if player1.y  < yScreen:
        player1.gravity();

    if keys['w']:
        if player1.y > 400:
            player1.y -= 1.2;
        else:
            keys['w'] = False;
    
    if keys['a']:
        if player1.x > 0:
            player1.x -= 0.2;

    if keys['s']:
        if player1.y  <= yScreen:
            player1.y += 0.2;

    if keys['d']:
        player1.x += 0.2;
        
    rect1 = pygame.rect.Rect((player1.x,player1.y - player1.heigth), (player1.width,player1.heigth))
    rectT = pygame.rect.Rect((200,200), (player1.width,player1.heigth))
    pygame.draw.rect(surf, (0,0,0), (0,0,xScreen,yScreen))
    pygame.draw.rect(surf,(255,255,255),rectT)
    pygame.draw.rect(surf,(255,255,255),rect1);
    screen.update();
    
    