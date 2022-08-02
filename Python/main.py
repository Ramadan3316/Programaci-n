#b n N
import pygame, sys;
xScreen = 800;
yScreen = 600;
surf = pygame.display.set_mode((xScreen,yScreen));
screen = pygame.display;
x=0;
y=yScreen;
width=50;
heigth=100;
flagUp = True;
flagDown = True;
keys = {
    'a':False,
    'd':False,
    'w':False,
    's':False, 
}

while 1:
    rect1 = pygame.rect.Rect((x,y - heigth), (width,heigth))
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit();
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                sys.exit();
            if event.key == pygame.K_w:
                keys['w'] = True
                flagU = True;
            if event.key == pygame.K_a:
                keys['a'] = True
                flagL = True;
            if event.key == pygame.K_s:
                keys['s'] = True
                flagD = True;
            if event.key == pygame.K_d:
                keys['d'] = True
                flagR = True;  
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_w:
                keys['w'] = False
                flagU = True;
            if event.key == pygame.K_a:
                keys['a'] = False;

            if event.key == pygame.K_s:
                keys['s'] = False
            if event.key == pygame.K_d:
                keys['d'] = False;
        if y < 1:
            flagU = False;
        if y + heigth > yScreen:
            flagD = False;
        if x < 0:
            flagL = False;
        if x + width > xScreen:
            flagR = False;

    if keys['w'] and flagU:
        y -= 0.2
    if keys['a'] and flagL:
        x -= 0.2
    if keys['d'] and flagR:
        x += 0.2;
    if keys['s'] and flagD:
        y += 0.2;


    pygame.draw.rect(surf, (0,0,0), (0,0,800,600))
    pygame.draw.rect(surf,(255,255,255),rect1);
    screen.update();
    
    