new Vue({
  el:"#app",
  data:{
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns:[]
  },
  methods:{
    onClickStartGame: function(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
      this.turns = [];
    },
    onClickAttack: function(){
      var damage = this.calculateDamage(2,10)
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player attack monster with damage = ${damage}`
      })
      if(this.checkWin()){
        return;
      }

      this.monsterAttack();
      this.checkWin();
    },
    onClickSpecialAttack: function(){
      var damage = this.calculateDamage(10,20)
      this.monsterHealth -= damage;
      this.turns.unshift({
          isPlayer: true,
          text: `Player special attack monster with damage = ${damage}`
      })
      this.monsterAttack();
    },
    onClickHeal: function(){
      if(this.playerHealth < 90){
        this.playerHealth += 10;
      }else{
        this.playerHealth = 100;
      }

      this.turns.unshift({
        isPlayer: true,
        text: `Player heal = 10`
      })

      this.monsterAttack();
    },
    onClickGiveUp: function(){
      this.gameIsRunning = false;
    },
    monsterAttack: function(){
      var damage = this.calculateDamage(5,11);
      if(this.checkWin()){
        return;
      }

      this.turns.unshift({
        isPlayer: false,
        text: `Monster attack player with damage = ${damage}`
      })

      this.playerHealth -= damage;
      this.checkWin();
    },
    calculateDamage: function(min,max){
      return Math.max(Math.floor(Math.random() * max) + 1,min);
    },
    checkWin: function(){
      if(this.monsterHealth <= 0){
        if(confirm("You won ! Want more game???")){
          this.onClickStartGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }else if(this.playerHealth <= 0){
        if(confirm("You lost ! Try again???")){
          this.onClickStartGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }
      return false
    }

  }
});
