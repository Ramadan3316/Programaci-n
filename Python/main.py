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

red = (255,0,0);
green = (0,255,0);
blue = (0,0,255);

class Player:
    x = xScreen/2;
    y = yScreen/2;

    def __init__(self,width,height,posY):
        self.width = width;
        self.heigth = height;
        self.y = posY

    def draw(self,color):
        self.rect = pygame.rect.Rect((self.x, self.y - self.heigth), (self.width,self.heigth))
        # rectCol = pygame.rect.Rect((player.x,player.y-player.heigth/20), (player.width,player.heigth/20))
        pygame.draw.rect(surf,color,self.rect);
        
        
        # pygame.draw.rect(surf,(255,255,255),rect1);
        # playerCol = pygame.draw.rect(surf,(0,255,0),rectCol);

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
        self.rectC = pygame.rect.Rect((rectP.x,rectP.y),(rectP.width,1))
        pygame.draw.rect(surf,(255,255,255),rectP);
        self.platformColision = pygame.draw.rect(surf,(0,255,0),self.rectC);
    
    def colision(self,playerColider):
        if self.platformColision.colliderect(playerColider) == True:
            player.gravity(0);
            return True;
        else:
            return False;
            
player = Player(25,50,600);
jumpPlat = Player(25,1,600);
plat1 = platforms(100,50,400,425);
plat2 = platforms(50,50,800,425);
platArr = [plat1,plat2];
runGame = True;
index = 1;

while runGame:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit();
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                sys.exit();
            if event.key == pygame.K_w and player.y > yScreen - 10:
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
    
    pygame.draw.rect(surf, (0,0,0), (0,0,xScreen,yScreen))
    player.draw(red)
    jumpPlat.draw(green);
    for i in range(len(platArr)):
        platArr[i].draw();
        # platArr[i].colision(jumpPlat.rect);
    for plat in platArr: 
        # print(plat.posY);
        if player.y  < yScreen and plat.colision(jumpPlat.rect) == False:
            player.gravity(0.8);
            jumpPlat.gravity(0.8);
            print("hay gravedad")

        if keys['w']:
            if plat.colision(jumpPlat.rect) == False:
                if player.y > 300:
                    player.y -= 1.5;
                    jumpPlat.y -= 1.5;
                else:
                    keys['w'] = False;
            else:
                if player.y > 600:
                    player.y -= 1.5;
                    jumpPlat.y -= 1.5;
                else:
                    keys['w'] = False;
    
    if keys['a']:
        for i in range(len(platArr)):
            platArr[i].move(1,0);
        
    if keys['s']:
        if player.y  <= yScreen:
            player.y += 0.2;
            jumpPlat.y += 0.2;

    if keys['d']:
        for i in range(len(platArr)):
            platArr[i].move(-1,0);
    
    screen.update();    
    index;
    
    