import '../../assets/styles/dashboard.scoped.css'
import '../../assets/styles/general.scoped.css'

function Tablinks() {
    return(
        <div class="tab">
        <button class="tablinks" onclick="openCity(event, 'LevelOne')">
            <div class = "level_item">
                <div class = "level_top_child_border"></div>
                    <div class = "level_bottom_child_border"></div>
                        <div class = "level_content">
                            <p class = "level_title">Уровень 1</p>
                              <div class = "quantity_block">
                                  <p class = "quantity_text">5</p>
                              </div>
                         </div>
            </div>
        </button>
        <button class="tablinks" onclick="openCity(event, 'LevelTwo')">
             <div class = "level_item">
                <div class = "level_top_child_border"></div>
                    <div class = "level_bottom_child_border"></div>
                        <div class = "level_content">
                            <p class = "level_title">Уровень 2</p>
                              <div class = "quantity_block">
                                  <p class = "quantity_text">5</p>
                              </div>
                         </div>
            </div>
        </button>
        <button class="tablinks" onclick="openCity(event, 'LevelThree')">
             <div class = "level_item">
                <div class = "level_top_child_border"></div>
                    <div class = "level_bottom_child_border"></div>
                        <div class = "level_content">
                            <p class = "level_title">Уровень 3</p>
                              <div class = "quantity_block">
                                  <p class = "quantity_text">5</p>
                              </div>
                         </div>
            </div>
        </button>
        <button class="tablinks" onclick="openCity(event, 'LevelFour')">
            <div class = "level_item">
                <div class = "level_top_child_border"></div>
                    <div class = "level_bottom_child_border"></div>
                        <div class = "level_content">
                            <p class = "level_title">Уровень 4</p>
                              <div class = "quantity_block">
                                  <p class = "quantity_text">5</p>
                              </div>
                         </div>
            </div>
        </button>
        <button class="tablinks" onclick="openCity(event, 'LevelFive')">
             <div class = "level_item">
                <div class = "level_top_child_border"></div>
                    <div class = "level_bottom_child_border"></div>
                        <div class = "level_content">
                            <p class = "level_title">Уровень 5</p>
                              <div class = "quantity_block">
                                  <p class = "quantity_text">5</p>
                              </div>
                         </div>
            </div>
        </button>
        <button class="tablinks" onclick="openCity(event, 'LevelSix')">
            <div class = "level_item">
                <div class = "level_top_child_border"></div>
                    <div class = "level_bottom_child_border"></div>
                        <div class = "level_content">
                            <p class = "level_title">Уровень 6</p>
                              <div class = "quantity_block">
                                  <p class = "quantity_text">5</p>
                              </div>
                         </div>
            </div>
        </button>
        <button class="tablinks" onclick="openCity(event, 'LevelSeven')">
            <div class = "level_item">
                <div class = "level_top_child_border"></div>
                    <div class = "level_bottom_child_border"></div>
                        <div class = "level_content">
                            <p class = "level_title">Уровень 7</p>
                              <div class = "quantity_block">
                                  <p class = "quantity_text">5</p>
                              </div>
                         </div>
            </div>
        </button>
    </div>
  )
  }
export default Tablinks