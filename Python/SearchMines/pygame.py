#b n N
import pygame,sys

pygame.init()
xScreen = 600
yScreen = 800
surf = pygame.display.set_mode((xScreen,yScreen))
screen = pygame.display

runGame = True

while runGame:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
    # pygame.draw.rect(surf, (0,0,0), (0,0,xScreen,yScreen))
