#b n
import pygame, sys;

surf = pygame.display.set_mode((800,600),32,0);
screen = pygame.display;

while 1:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit();
        if event.type == pygame.KEYDOW:
            if event.key == pygame.K_W:
                rect1 = pygame.rect.Rect((200,200), (50,100))
                pygame.draw.rect(surf,(255,255,255),rect1);
                pygame.display.update();

    
    