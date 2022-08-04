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
    x = xScreen/2;
    
    def __init__(self,width,height,posY):
        self.width = width;
        self.heigth = height;
        self.y = posY;

    def gravity(self,value):
        self.y += value;

class platforms:
    def __init__(self,w,h,x,y):
        self.width = w;
        self.height = h;
        self.posX = x;
        self.posY = y;

    def move(self,xC,yC):
        self.posX += xC;
        self.posY += yC;
        screen.update();

    def draw(self):
        rectP = pygame.rect.Rect((self.posX,self.posY), (self.width,self.height))
        rectC = pygame.rect.Rect((rectP.x,rectP.y),(rectP.width,1))
        pygame.draw.rect(surf,(255,255,255),rectP);
        self.platformColision = pygame.draw.rect(surf,(0,255,0),rectC);
    
    def colision(self,playerColider):
        if self.platformColision.colliderect(playerColider) == True:
            player1.gravity(0);
            return True;
        else:
            return False;
            
player1 = Player(25,50,600);  
plat1 = platforms(100,50,400,425);
plat2 = platforms(50,50,800,425);

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

    rect1 = pygame.rect.Rect((player1.x,player1.y - player1.heigth), (player1.width,player1.heigth))
    rectT = pygame.rect.Rect((200,200), (player1.width,player1.heigth))
    pygame.draw.rect(surf, (0,0,0), (0,0,xScreen,yScreen))
    playerCol = pygame.draw.rect(surf,(255,255,255),rect1);
    plat1.draw();
    plat2.draw();
    plat1.colision(playerCol);
    
    if player1.y  < yScreen and plat1.colision(playerCol) == False:
        player1.gravity(0.8);
        print("hay gravedad");

    if keys['w']:
        if plat1.colision(playerCol) == False:
            if player1.y > 400:
                player1.y -= 1.8;
                print("aca")
            else:
                keys['w'] = False;
        else:
            if player1.y > 600:
                player1.y -= 1.8;
                print("aca")
            else:
                keys['w'] = False;
    
    if keys['a']:
        plat1.move(1,0);
        plat2.move(1,0)
        
    if keys['s']:
        if player1.y  <= yScreen:
            player1.y += 0.2;

    if keys['d']:
        plat1.move(-1,0)
        plat2.move(-1,0)
    
    screen.update();    
    
    
    