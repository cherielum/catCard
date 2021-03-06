$(function() {

    var pet_info = {
      "name": 'claire the cat: ',
      "weight" : 10,
      "purring": 2,
      "action": ''
    }

    checkAndUpdatePetInfoInHtml();

    $('.work-button').click(clickedWorkButton);
    $('.nap-button').click(clickedNapButton);
    $('.eat-button').click(clickedEatButton);
    $('.poke-button').click(clickedPokeButton);

    function clickedWorkButton() {
      pet_info['purring'] = pet_info['purring'] + 0;
      pet_info['weight'] = pet_info['weight'] - 1;
      pet_info['action'] = ' hunted';
      checkAndUpdatePetInfoInHtml();
    }

    function clickedNapButton() {
      pet_info['purring'] = pet_info['purring'] + 1;
      pet_info['weight'] = pet_info['weight'] - 0;
      pet_info['action'] = ' napped';
      checkAndUpdatePetInfoInHtml();
    }

    function clickedEatButton() {
      pet_info['purring'] = pet_info['purring'] + 1;
      pet_info['weight'] = pet_info['weight'] + 1;
      pet_info['action'] = ' ate';
      checkAndUpdatePetInfoInHtml();
    }

    function clickedPokeButton() {
        pet_info['purring'] = pet_info['purring'] - 1;
        pet_info['weight'] = pet_info['weight'] + 0;
        pet_info['action'] = ' irritated';
        checkAndUpdatePetInfoInHtml();
      }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();
      updatePetInfoInHtml();
    }

    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info['weight'] < 1) {
        pet_info['weight'] = 1;
      }
    }

    function updatePetInfoInHtml() {
      $('.weight').text(pet_info['weight']);
      $('.purring').text(pet_info['purring']);
      $('.name').text(pet_info['name'] + pet_info['action']);
    }

  })
