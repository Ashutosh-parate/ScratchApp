

export const executeAction = (action, sprite) => {
    switch (action.type) {
      case 'moveX':
        sprite.x += 50;
        break;
      case 'moveY':
        sprite.y += 50;
        break;
      case 'rotate':
        sprite.rotation = (sprite.rotation + 360) % 360;
        break;
      case 'goTo00':
        sprite.x = 0;
        sprite.y = 0;
        break;
      case 'goToRandom':
        sprite.x = Math.random() * 300; 
        sprite.y = Math.random() * 600;
        break;
      case 'sayHello':
        sprite.message = 'Hello';
        setTimeout(() => {
          sprite.message = '';
        }, 1000); 
        break;
      case 'increaseSize':
        sprite.size = Math.min(sprite.size + 10, 200); 
        break;
      case 'decreaseSize':
        sprite.size = Math.max(sprite.size - 10, 50); 
        break;
      
      default:
        break;
    }
  };
  